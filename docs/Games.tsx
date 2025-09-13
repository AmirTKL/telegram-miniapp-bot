import { useEffect, useState, type FC } from "react";
import { on, postEvent } from "@telegram-apps/sdk-react";
import { Link } from "../src/components/Link/Link";

export const GamesPage: FC = () => {
  const [isInGame, toggleIsInGame] = useState(false);

  const gameScript = document.createElement("script");
  function addGameFile() {
    const UrlParam = window.location.href.split("?");
    let searchedGame = UrlParam[UrlParam.length - 1];
    searchedGame = searchedGame.replace(/[^A-Za-z0-9_-]/g, "");
    const gameFile = `/docs/${searchedGame}/main.js`;
    console.log(gameFile);
    gameScript.src = gameFile;
    if (
      gameFile === "/docs/httpslocalhost5173games/main.js" ||
      gameFile === "/docs/https19216811275173games/main.js"
    ) {
      return;
    }
    toggleIsInGame(true);
    document.head.appendChild(gameScript);
  }
  const removeListener = on("back_button_pressed", () => {
    if (isInGame) {
      toggleIsInGame(false);
      location.href = "#/games";
      location.reload();
    } else {
      location.href = "";
      postEvent("web_app_setup_back_button", { is_visible: false });
    }
  });

  useEffect(() => {
    // const soundsSomeSounds = document.createElement("script");
    // soundsSomeSounds.src =
    //   "https://unpkg.com/sounds-some-sounds@2.0.0/build/index.js";
    // document.head.appendChild(soundsSomeSounds);

    // const gifCaptureCanvas = document.createElement("script");
    // gifCaptureCanvas.src =
    //   "https://unpkg.com/gif-capture-canvas@1.1.0/build/index.js";
    // document.head.appendChild(gifCaptureCanvas);

    // const pixi = document.createElement("script");
    // pixi.src = "https://unpkg.com/pixi.js@5.3.0/dist/pixi.min.js";
    // document.head.appendChild(pixi);

    // const pixiFilters = document.createElement("script");
    // pixiFilters.src =
    //   "https://unpkg.com/pixi-filters@3.1.1/dist/pixi-filters.js";
    // document.head.appendChild(pixiFilters);

    // const pixiScript = document.createElement("script");
    // pixiScript.text = "var module = {}";
    // document.head.appendChild(pixiScript);

    // const lodashCloneDeep = document.createElement("script");
    // lodashCloneDeep.src = "https://unpkg.com/lodash.clonedeep@4.5.0/index.js";
    // document.head.appendChild(lodashCloneDeep);

    // const bundle = document.createElement("script");
    // bundle.src = "https://unpkg.com/crisp-game-lib@1.0.2/docs/bundle.js";
    // document.head.appendChild(bundle);

    // const addGameFile = document.createElement("script");
    // addGameFile.text =
    //   'function addGameFile() {const UrlParam = window.location.href.split("?"); let searchedGame = UrlParam[UrlParam.length - 1]; searchedGame = searchedGame.replace(/[^A-Za-z0-9_-]/g, ""); const gameFile = `/docs/${searchedGame}/main.js`; console.log(gameFile); const gameScript = document.createElement("script"); gameScript.src = gameFile; document.head.appendChild(gameScript); gameScript.id = "gameScript";} ';
    // document.head.appendChild(addGameFile);
    postEvent("web_app_setup_back_button", { is_visible: true });

    const bundleScript = document.createElement("script");
    addGameFile();
    bundleScript.text = "onLoad();";
    gameScript.addEventListener("load", () => {
      document.head.appendChild(bundleScript);
    });

    return () => {
      postEvent("web_app_setup_back_button", { is_visible: false });
      document.head.removeChild(gameScript);
      document.head.removeChild(bundleScript);
      location.reload();
    };
  }, []);

  const gameList = ["accelb", "wiper", "unctrl", "upshot", "vbomb"];
  return (
    <div
      style={{
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 10,
      }}
    >
      {/* <button
        onClick={() => {
          if (isInGame) {
            toggleIsInGame(false);
            location.href = "#/games";
            location.reload();
          } else {
            location.href = "";
          }
        }}
      >
        BACK
      </button> */}
      {isInGame === true ? (
        <div>en game</div>
      ) : (
        gameList.map((game) => {
          const gameName = game.charAt(0).toUpperCase() + game.slice(1);

          return (
            <div
              key={game}
              onClick={() => {
                addGameFile();
              }}
            >
              <Link to={`?${game}`}>
                <h3 style={{ margin: 0, padding: 10 }}>{gameName}</h3>
                <img width={150} src={`docs/${game}/screenshot.gif`} />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};
