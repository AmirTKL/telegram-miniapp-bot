import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { on, showBackButton } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export const Route = createFileRoute("/games/$gameName")({
  component: GameComponent,
});

const BASE_URL = "/telegram-miniapp-bot/";

function GameComponent() {
  const { gameName } = Route.useParams();
  const navigate = useNavigate();

  const gameScript = document.createElement("script");
  function addGameFile() {
    const UrlParam = window.location.href.split("?");
    let searchedGame = UrlParam[UrlParam.length - 1];
    searchedGame = searchedGame.replace(/[^A-Za-z0-9_-]/g, "");
    const gameFile = `${BASE_URL}docs/${gameName}/main.js`;
    console.log(gameFile);
    gameScript.src = gameFile;
    if (gameFile.includes("games/main.js")) {
      // alert("No games selected");
      return;
    }
    // alert("Game detected");
    document.head.appendChild(gameScript);
  }
  useEffect(() => {
    showBackButton();
    on("back_button_pressed", () => {
      navigate({ to: "/games", search: { pageIndex: 1 } });
    });
    const bundleScript = document.createElement("script");
    addGameFile();
    bundleScript.text = "onLoad();";
    gameScript.addEventListener("load", () => {
      document.head.appendChild(bundleScript);
    });
    return () => {
      // alert("Cleaning up");
      document.head.removeChild(gameScript);
      document.head.removeChild(bundleScript);
      location.reload();
    };
  }, []);

  console.log(gameName);
}
