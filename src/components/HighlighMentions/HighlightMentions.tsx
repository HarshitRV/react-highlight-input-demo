import { useRef, useState } from "react";
import {
	HighlightableTextInput,
	highlightMentions,
	cleanHtml,
} from "react-highlightable-input";

export default function HighlightMention() {
	const inputRef = useRef<HTMLDivElement>(null);
	const shadowRef = useRef<HTMLDivElement>(null);
	const [highlightedContent, setHiglightedContent] = useState<string>("");

	const onInput = () => {
		if (inputRef.current) {
			const value = inputRef.current.innerHTML;
			const highlighted = highlightMentions(value, /@[\w]+/g, "#1d9bf0");
			setHiglightedContent(highlighted);
		}
	};

	const onSend = () => {
		console.log("Send message:", cleanHtml(highlightedContent));
	};

	return (
		<div>
			<div
				style={{
					border: "1px solid black",
					padding: "5px",
				}}>
				<HighlightableTextInput
					inputRef={inputRef}
					shadowRef={shadowRef}
					highlightedContent={highlightedContent}
					setHiglightedContent={setHiglightedContent}
					onInput={onInput}
					placeholderText="Highlight mentions with @ symbol"
				/>
			</div>

			<button
				onClick={onSend}
				style={{
					backgroundColor: "#4caf50",
					color: "white",
					padding: "5px 10px",
					border: "none",
					cursor: "pointer",
					alignSelf: "flex-start",
					marginTop: "10px",
				}}>
				Send
			</button>
		</div>
	);
}
