import type { Element, Root } from "hast";
import type { Visitor } from "unist-util-visit";
import { visit } from "unist-util-visit";
import { SKIP } from "unist-util-visit-parents"; // これを追加

export const rehypeRemoveFirstHeading = () => {
  return (tree: Root) => {
    let foundFirstH1 = false;

    const visitor: Visitor<Element> = (node, index, parent) => {
      if (
        !foundFirstH1 &&
        node.tagName === "h1" &&
        parent &&
        typeof index === "number"
      ) {
        parent.children.splice(index, 1);
        foundFirstH1 = true;
        return [SKIP, index];
      }
    };

    visit(tree, "element", visitor);
  };
};
