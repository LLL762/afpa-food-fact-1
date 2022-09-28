const TagFilter = () => {
  const filter = (packaging, tagName) => {
    return (
      packaging
        .filter((p) => p.startsWith(tagName))
        .map((p) => p.slice(tagName.length))
        .join(", ") || "Not supported in english"
    );
  };

  return { filter };
};

export { TagFilter };
