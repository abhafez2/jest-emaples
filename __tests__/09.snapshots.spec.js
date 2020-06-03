const React = require("react");
const ReactDOM = require("react-dom");
const renderer = require("react-test-renderer");
const { getFlyingSuperHeros } = require("../super-heros");
const { varietyObject } = require("../varietyObject");

test('manual "snapshot"', () => {
  const flyingHeros = getFlyingSuperHeros();
  expect(flyingHeros).toEqual([
    { name: "🐲 Dragon", powers: ["disintegration ray", "fly"] },
    { name: "👻 Casper", powers: ["gravity control", "fly"] },
  ]);
});

test("automatic snapshot", () => {
  const flyingHeros = getFlyingSuperHeros();
  expect(flyingHeros).toMatchSnapshot();
});

test("snapshot examples", () => {
  expect(varietyObject).toMatchSnapshot();

  // AND DOM NODES!!!
  const div = document.createElement("div");
  const title = '<h2 class="title">Super Heros are great!</h2>';
  const content =
    '<p class="content">We can each be a super hero for someone</p>';
  div.innerHTML = `<section>${title}${content}</section>`;
  expect(div).toMatchSnapshot("title of a snapshot!");

  // And react elements!
  const onClick = () => {};
  const element = React.createElement("button", { onClick }, "Hello World");
  expect(element).toMatchSnapshot("react element");

  // and rendered elements
  const rendered = renderer.create(element);
  expect(rendered).toMatchSnapshot("rendered");

  // and DOM nodes rendered via react
  const app = document.createElement("div");
  ReactDOM.render(element, app);
  expect(app).toMatchSnapshot("react-dom");
});
