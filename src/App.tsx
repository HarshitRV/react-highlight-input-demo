import HighlightInput from "./components/HighlightInput/HighlightInput";
import HighlightMention from "./components/HighlighMentions/HighlightMentions";
import "./App.css";

function App() {
	return (
		<main>
			<section>
				<h1 className="heading">
					Highlight mentions with @ symbol using{" "}
					<a
						href="https://github.com/HarshitRV/react-highlightable-input?tab=readme-ov-file#highlightmentions"
						target="_blank">
						highlightMentions
					</a>{" "}
					method
				</h1>
				<HighlightMention />
			</section>
			<section>
				<h1 className="heading">
					Highlight mentions with @ symbol using{" "}
					<a
						href="https://github.com/HarshitRV/react-highlightable-input?tab=readme-ov-file#highlighttext"
						target="_blank">
						highlightText
					</a>{" "}
					method
				</h1>
				<p>
					PS: Do not add padding or margin for your custom highlight styles
					(some issues with it)
				</p>
				<HighlightInput />
			</section>
		</main>
	);
}

export default App;
