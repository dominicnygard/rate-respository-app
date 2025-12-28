import { render, screen } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RepositoryListContainer } from "../../../components/RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      render(
        <SafeAreaProvider>
          <RepositoryListContainer repositories={repositories} />
        </SafeAreaProvider>
      );

      screen.debug();

      const repositoryNames = screen.getAllByTestId("repositoryName");
      expect(repositoryNames[0]).toHaveTextContent("jaredpalmer/formik");
      expect(repositoryNames[1]).toHaveTextContent("async-library/react-async");

      const repositoryDescriptions = screen.getAllByTestId(
        "repositoryDescription"
      );
      expect(repositoryDescriptions[0]).toHaveTextContent(
        "Build forms in React, without the tears"
      );
      expect(repositoryDescriptions[1]).toHaveTextContent(
        "Flexible promise-based React data loader"
      );

      const repositoryLanguages = screen.getAllByTestId("repositoryLanguage");
      expect(repositoryLanguages[0]).toHaveTextContent("TypeScript");
      expect(repositoryLanguages[1]).toHaveTextContent("JavaScript");

      const repositoryForks = screen.getAllByTestId("repositoryForks");
      expect(repositoryForks[0]).toHaveTextContent("1.6k");
      expect(repositoryForks[1]).toHaveTextContent("69");

      const repositoryStargazers = screen.getAllByTestId(
        "repositoryStargazers"
      );
      expect(repositoryStargazers[0]).toHaveTextContent("21.9k");
      expect(repositoryStargazers[1]).toHaveTextContent("1.8k");

      const repositoryRating = screen.getAllByTestId("repositoryRating");
      expect(repositoryRating[0]).toHaveTextContent("88");
      expect(repositoryRating[1]).toHaveTextContent("72");

      const repositoryReviews = screen.getAllByTestId("repositoryReviews");
      expect(repositoryReviews[0]).toHaveTextContent("3");
      expect(repositoryReviews[1]).toHaveTextContent("3");
    });
  });
});
