import { on, showBackButton } from "@telegram-apps/sdk-react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/games/")({
  component: Games,
});

const BASE_URL = "/telegram-miniapp-bot/";

function Games() {
  const navigate = useNavigate();
  useEffect(() => {
    showBackButton();
    on("back_button_pressed", () => {
      navigate({ to: "/" });
    });
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
      {/* <button
        onClick={() => {
          location.href = "/";
        }}
      >
        BACK
      </button> */}

      {gameList.map((game) => {
        const gameName = game.charAt(0).toUpperCase() + game.slice(1);

        return (
          <div key={game}>
            <Link to={`/games/$gameName`} params={{ gameName: game }}>
              <h3 style={{ margin: 0, padding: 10 }}>{gameName}</h3>
              <img width={150} src={`${BASE_URL}docs/${game}/screenshot.gif`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
