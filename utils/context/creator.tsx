/* eslint-disable react-hooks/rules-of-hooks */
import React, { Dispatch, SetStateAction } from "react";

interface contextProviderForUseStateProps<T> {
  state: T | undefined;
  setState: Dispatch<SetStateAction<T | undefined>>;
  children?: React.ReactNode;
  key?: string | number;
}

/**
 * @description
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 *
 * @returns
 * @param useContext - The same as `React.useContext`, except you don't need to pass in `context`
 *
 * @param ContextProvider - The same as `context.Provider`
 *
 * @param contextProviderForUseState
 * Strengthen `React.useState` with `React.useMemo` because the `context`
 * may be changed from different child (consumer) --> Cause unnecessary re-render. _**Notes**_:
 * This function will cause annoying TypeScript error
 * because I don't know how to fix it :(
 *
 * ---
 * * Basic usage
 *
 * @example
 * ```jsx
 * // We still have to specify a type, but no default!
 * export const [useUser, UserProvider] = contextCreator<string>();
 *
 * function App() {
 *   return (
 *     <UserProvider value="Anders">
 *       <EnthusasticGreeting />
 *     </UserProvider>
 *   );
 * }
 *
 * function EnthusasticGreeting() {
 *   const currentUser = useUser();
 *   return <div>HELLO {currentUser}!</div>;
 * }
 * ```
 *
 * * contextProviderForUseState
 *
 * @example
 * ```jsx
 * export const [useUser, _, UserProviderWithState] = contextCreator<string>();
 *
 * function App() {
 *   const [currentUser, setUser] = React.useState<string | undefined>("John Doe");
 *
 *   return (
 *     <UserProviderWithState state={currentUser} setState={setUser}>
 *       <EnthusasticGreeting />
 *     </UserProviderWithState>
 *   );
 * }
 * function EnthusasticGreeting() {
 *   const {currentUser, setUser} = useUser();
 *
 *   React.useEffect(() => setUser("Not John Doe anymore"), []) // for demo only
 *
 *   return <div>HELLO {currentUser}!</div>;
 * }
 * ```
 * @see https://github.com/kentcdodds/old-kentcdodds.com/blob/319db97260078ea4c263e75166f05e2cea21ccd1/content/blog/how-to-optimize-your-context-value/index.md
 * @see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/#extended-example
 */
export function contextCreator<A extends {} | null>() {
  const context = React.createContext<A | undefined>(undefined);

  function contextProviderForUseState<U extends {} | null>({
    state,
    setState,
    ...args
  }: contextProviderForUseStateProps<U>) {
    const memoVal = React.useMemo(() => {
      return [ state, setState ] as const;
    }, [state]);

    return <context.Provider value={memoVal} {...args} />;
  }

  function useContext() {
    const ctxProviderValueProps = React.useContext(context);
    if (!ctxProviderValueProps)
      throw new Error(
        "contextCreator - useContext must be inside a Provider with a value"
      );

    return ctxProviderValueProps;
  }

  return [useContext, context.Provider, contextProviderForUseState] as const; // 'as const' makes TypeScript infer a tuple
}
