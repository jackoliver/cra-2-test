import { MuiTest } from "@jvla/mui-test-pkg";
import { ContextTest, useContextTest } from "@jvla/context-test-pkg";

function App() {
  return (
    <ContextTest>
      <MuiTest>
        <ConnectedComponent />
      </MuiTest>
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
