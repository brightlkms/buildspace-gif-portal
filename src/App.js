import React, { useState, useEffect } from "react";
import twitterLogo from "./assets/twitter-logo.svg";
import "./App.css";
import idl from "./idl.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, Provider, web3, BN } from "@project-serum/anchor";
import kp from "./keypair.json";
const { SystemProgram, Keypair } = web3;

const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = web3.Keypair.fromSecretKey(secret);

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address);

// Set our network to devnet.
const network = clusterApiUrl("devnet");

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed",
};

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [gifList, setGifList] = useState([]);

  const TEST_GIFS = [
    "https://media1.giphy.com/media/3ohzdD7eLeRtCqZsR2/giphy.gif?cid=ecf05e470eu3mqdq16ioooyk2eocvg4jwdvqcx2tby4zk7yg&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/xUPGcC4A6ElcqtUJck/giphy.gif?cid=790b761112f588b94579f0bf108b9e88c8b2a8b1fc3e4e93&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/lsdd32H2EqjXGRhWu4/giphy.gif?cid=ecf05e47guphsi61s6x3oi3nbc6k4gzis1qml9licj1bwfba&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/XFLSzB1E7gYdW/giphy.gif?cid=ecf05e47z9zt0u62pke1iclwrajeza3cabodycvgaz5a4bkm&rid=giphy.gif&ct=g",
  ];
  // check if connected to Phantom
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom connected");

          const response = await solana.connect();
          console.log("Connected with Pub Key", response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Solana object not found! Get Phantom Wallet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    return checkIfWalletIsConnected();
  };

  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(
      connection,
      window.solana,
      opts.preflightCommitment
    );
    return provider;
  };

  const handleUpvote = async (index) => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      await program.rpc.upVote(new BN(index), {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      });
      getGifList();
    } catch (error) {
      console.log("Upvote error", error);
    }
  };

  const sendGif = async () => {
    // if (inputValue.length === 0) {
    //   console.log("No gif link given!");
    //   return;
    // }
    // setInputValue("");
    console.log("Gif link:", inputValue);
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);

      await program.rpc.addGif(inputValue, {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      });
      console.log("GIF successfully sent to program", inputValue);

      await getGifList();
    } catch (error) {
      console.log("Error sending GIF:", error);
    }
  };
  const renderConnectedContainer = () => {
    // If we hit this, it means the program account hasn't been initialized.
    if (gifList === null) {
      return (
        <div className="connected-container">
          <button
            className="cta-button submit-gif-button"
            onClick={createGifAccount}
          >
            Do One-Time Initialization For GIF Program Account
          </button>
        </div>
      );
    }
    // Otherwise, we're good! Account exists. User can submit GIFs.
    else {
      return (
        <div className="connected-container">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendGif();
            }}
          >
            <input
              type="text"
              placeholder="Enter gif link!"
              value={inputValue}
              onChange={onInputChange}
            />
            <button type="submit" className="cta-button submit-gif-button">
              Submit
            </button>
          </form>
          <div className="gif-grid">
            {/* We use index as the key instead, also, the src is now item.gifLink */}
            {gifList.map((item, index) => (
              <div className="gif-item" key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: 16,
                  }}
                >
                  <span style={{ color: "white" }}>
                    Likes: {item.likes.toNumber()}
                  </span>
                  <div
                    style={{
                      color: "white",
                      margin: "0 8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleUpvote(index)}
                  >
                    Up
                  </div>
                </div>
                <img src={item.gifLink} alt={index} />
                <span style={{ color: "white" }}>
                  contributor: {item.userAddress.toString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const getGifList = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      const account = await program.account.baseAccount.fetch(
        baseAccount.publicKey
      );

      setGifList(account.gifList);
    } catch (error) {
      console.log("Error in getGifList ", error);
      setGifList(null);
    }
  };
  const createGifAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
      console.log(
        "Created a new BaseAccount w/ address:",
        baseAccount.publicKey.toString()
      );
      await getGifList();
    } catch (error) {
      console.log("Error creating BaseAccount account:", error);
    }
  };
  useEffect(() => {
    if (walletAddress) {
      console.log("Fetching GIF");

      //Call Solana Program
      getGifList();
    }
  }, [walletAddress]);

  return (
    <div className="App">
      <div className={walletAddress ? "authed-container" : "container"}>
        <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
        </div>
        {walletAddress
          ? renderConnectedContainer()
          : renderNotConnectedContainer()}
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
