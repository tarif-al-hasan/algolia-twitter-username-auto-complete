import App from "../components/App";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

const searchClient = algoliasearch(
  "latency",
  "a4390aa69f26de2fd0c4209ff113a4f9"
);

const INDEX_NAME = "autocomplete_twitter_accounts";

export default function Home() {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={INDEX_NAME}
        suppressExperimentalWarning
      >
        <App />
      </InstantSearch>
    </>
  );
}
