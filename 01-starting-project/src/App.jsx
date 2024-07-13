import { useState } from "react";
import Coreconcepts from "./Components/Coreconcepts/Coreconcepts";
import Header from "./Components/Header/Header";
import TabButton from "./Components/TabButton/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [selectedButton, setSelectedButton] = useState("components");

  function handleSelect(tabButton) {
    setSelectedButton(tabButton);
  }

  const selectedExample = EXAMPLES[selectedButton] || {
    title: "No Title",
    description: "No Description",
    code: "No Code",
  };

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <Coreconcepts {...CORE_CONCEPTS[0]}></Coreconcepts>
            <Coreconcepts {...CORE_CONCEPTS[1]}></Coreconcepts>
            <Coreconcepts {...CORE_CONCEPTS[2]}></Coreconcepts>
            <Coreconcepts {...CORE_CONCEPTS[3]}></Coreconcepts>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedButton === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedButton === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedButton === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButton === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedButton ? <p>Please slect any button</p> : null}
          {selectedButton ? (
            <div id="tab-content">
              <h3>{selectedExample.title}</h3>
              <p>{selectedExample.description}</p>
              <pre>
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          ) : (
            ""
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
