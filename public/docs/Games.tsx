import { useEffect, useState, type FC } from "react";
import { on, postEvent } from "@telegram-apps/sdk-react";
import { Link } from "../../src/components/Link/Link";

const BASE_URL = "/telegram-miniapp-bot/"; // prod
// const BASE_URL= "/" // dev

export const GamesPage: FC = () => {
  const [isInGame, toggleIsInGame] = useState(true);

  const gameScript = document.createElement("script");
  function addGameFile() {
    const UrlParam = window.location.href.split("?");
    let searchedGame = UrlParam[UrlParam.length - 1];
    searchedGame = searchedGame.replace(/[^A-Za-z0-9_-]/g, "");
    const gameFile = `${BASE_URL}docs/${searchedGame}/main.js`;
    console.log(gameFile);
    gameScript.src = gameFile;
    if (gameFile.includes("games/main.js")) {
      // alert("No games selected");
      toggleIsInGame(false);
      return;
    }
    // alert("Game detected");
    toggleIsInGame(true);
    document.head.appendChild(gameScript);
  }
  const removeBackButtonListener = on("back_button_pressed", () => {
    if (isInGame) {
      // alert("Button pressed");
      toggleIsInGame(false);
      location.href = "#/games";
      location.reload();
    } else {
      location.href = "";
      postEvent("web_app_setup_back_button", { is_visible: false });
    }
  });

  useEffect(() => {
    postEvent("web_app_setup_back_button", { is_visible: true });

    const bundleScript = document.createElement("script");
    addGameFile();
    bundleScript.text = "onLoad();";
    gameScript.addEventListener("load", () => {
      document.head.appendChild(bundleScript);
    });

    return () => {
      // alert("Cleaning up");
      postEvent("web_app_setup_back_button", { is_visible: false });
      removeBackButtonListener();
      document.head.removeChild(gameScript);
      document.head.removeChild(bundleScript);
      location.reload();
    };
  }, []);

  const gameList = [
    "aerialbar",
    "antlion",
    "arcfire",
    "balance",
    "balloon",
    "ballsbombs",
    "balltour",
    "bamboo",
    "baroll",
    "bblast",
    "bcannon",
    "bmath",
    "boarding",
    "bombup",
    "bottop",
    "breedc",
    "bsfish",
    "bwalls",
    "cardq",
    "castn",
    "catapult",
    "catep",
    "chargebeam",
    "circlew",
    "cnodes",
    "colorroll",
    "count",
    "counterb",
    "crossline",
    "ctower",
    "cywall",
    "darkcave",
    "descents",
    "dfight",
    "digi10",
    "divarr",
    "dlaser",
    "dmissile",
    "doshin",
    "dpistols",
    "earock",
    "embattled",
    "findastar",
    "flipbomb",
    "flipo",
    "floater",
    "floors5",
    "foosan",
    "forfour",
    "fromtwosides",
    "froooog",
    "futurewake",
    "geocent",
    "gloop",
    "golfme",
    "gpress",
    "graveler",
    "grenadier",
    "growth",
    "gtail",
    "hexmin",
    "hitblowup",
    "holes",
    "hoppingp",
    "hyperlaser",
    "infrange",
    "interspace",
    "intow",
    "islash",
    "jujump",
    "jumpon",
    "kite",
    "ladderdrop",
    "laserfortress",
    "liedown",
    "liftup",
    "lightdark",
    "lineb",
    "lland",
    "lrain",
    "makemaze",
    "mfield",
    "mirrorfloor",
    "mjamming",
    "molen",
    "monjum",
    "mortar",
    "mrider",
    "notturn",
    "nsclimb",
    "numberball",
    "numberline",
    "orbitman",
    "pairsdrop",
    "parking",
    "pfit",
    "photonline",
    "pileup",
    "pillars3d",
    "pinclimb",
    "pizzaarrow",
    "portalj",
    "pressm",
    "pumppress",
    "raid",
    "rebirth",
    "refbals",
    "reflector",
    "regene",
    "revolvea",
    "rolfrg",
    "rollnrope",
    "rolls",
    "rps",
    "rring",
    "rwheel",
    "scaffold",
    "scrambird",
    "screen",
    "shiny",
    "sighton",
    "skyfloor",
    "slalom",
    "slanes",
    "slashes",
    "smilyangry",
    "smokeg",
    "snake1",
    "snaky",
    "spearain",
    "squarebar",
    "sshake",
    "subjump",
    "sumten",
    "survivor",
    "swingby",
    "tapej",
    "tappump",
    "tarutobi",
    "teeter",
    "thanoi",
    "throwm",
    "thrustlr",
    "thunder",
    "tilted",
    "tlanes",
    "tlaser",
    "totoge",
    "tpunch",
    "trbeam",
    "ttfence",
    "turbulent",
    "twhols",
    "twinp",
    "twofaced",
    "twolane",
    "udcave",
    "unctrl",
    "updownpress",
    "upshot",
    "vbomb",
    "vhwalls",
    "wiper",
    "zartan",
    "zoneb",
    "zoomio",
  ];
  return (
    <div
      style={{
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 10,
      }}
    >
      <button
        onClick={() => {
          if (isInGame) {
            // alert("Back Pressed");
            toggleIsInGame(false);
            location.href = "#/games";
            location.reload();
          } else {
            location.href = "";
          }
        }}
      >
        BACK
      </button>
      {isInGame === true ? (
        <div>In Game</div>
      ) : (
        gameList.map((game) => {
          const gameName = game.charAt(0).toUpperCase() + game.slice(1);

          return (
            <div
              key={game}
              onClick={() => {
                addGameFile();
                // alert("Reloading from the onclick event");
                location.reload();
              }}
            >
              <Link to={`?${game}`}>
                <h3 style={{ margin: 0, padding: 10 }}>{gameName}</h3>
                <img
                  width={150}
                  src={`${BASE_URL}docs/${game}/screenshot.gif`}
                />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};
