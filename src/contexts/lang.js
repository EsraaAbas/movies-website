import { createContext } from "react";
const langcontext = createContext('en');
const LangProvider = langcontext.Provider;

export { langcontext, LangProvider };