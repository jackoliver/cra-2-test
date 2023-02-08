import { ContextTest, useContextTest } from "@jvla/context-test";

function App() {
  return (
    <ContextTest>
      <ConnectedComponent />
    </ContextTest>
  );
}

const ConnectedComponent = () => {
  const { active } = useContextTest();
  return (
    <div>
      {active.get() ? "active" : "inactive"}
      <br />
      <button onClick={() => active.set(!active.get())}>Toggle</button>
    </div>
  );
};

export default App;
