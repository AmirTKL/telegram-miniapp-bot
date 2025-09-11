import { useEffect, type FC } from "react";

export const GamesPage: FC = () => {
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

    const gameScript = document.createElement("script");
    function addGameFile() {
      const UrlParam = window.location.href.split("?");
      let searchedGame = UrlParam[UrlParam.length - 1];
      searchedGame = searchedGame.replace(/[^A-Za-z0-9_-]/g, "");
      const gameFile = `/docs/${searchedGame}/main.js`;
      console.log(gameFile);
      gameScript.src = gameFile;
      document.head.appendChild(gameScript);
    }

    addGameFile();
    const bundleScript = document.createElement("script");
    bundleScript.text = "onLoad(); ";
    gameScript.addEventListener("load", () => {
      document.head.appendChild(bundleScript);
    });

    return () => {
      // document.head.removeChild(soundsSomeSounds);
      // document.head.removeChild(gifCaptureCanvas);
      // document.head.removeChild(pixi);
      // document.head.removeChild(pixiFilters);
      // document.head.removeChild(pixiScript);
      // document.head.removeChild(lodashCloneDeep);
      // document.head.removeChild(bundle);
      // const bundleScript = document.head.querySelector("#bundleScript");
      // console.log(bundleScript);
      // document.head.removeChild(bundleScript!);
      // console.log(document.head.getElementsByClassName("bundleScript"));
      // document.head.removeChild(
      //   document.head.getElementsByClassName("bundleScript")[0]
      // );
      // document.head.removeChild(document.getElementById("gameScript")!);
    };
  }, []);

  return (
    <div>{}</div>
    // <head>
    //   <script src="https://unpkg.com/sounds-some-sounds@2.0.0/build/index.js"></script>
    //   <script src="https://unpkg.com/gif-capture-canvas@1.1.0/build/index.js"></script>
    //   <script src="https://unpkg.com/pixi.js@5.3.0/dist/pixi.min.js"></script>
    //   <script src="https://unpkg.com/pixi-filters@3.1.1/dist/pixi-filters.js"></script>
    //   <script>var module = {};</script>
    //   <script src="https://unpkg.com/lodash.clonedeep@4.5.0/index.js"></script>
    //   <script src="https://unpkg.com/crisp-game-lib@1.0.2/docs/bundle.js"></script>
    //   <script>addGameScript(); window.addEventListener("load", onLoad);</script>
    // </head>
  );
};
