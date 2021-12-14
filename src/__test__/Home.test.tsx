import { screen, fireEvent, render } from "@testing-library/react";
import Home from "../Pages/Home/index";

test("DEFAULT APP", () => {
  render(<Home />);

  const input1 = screen.getByTestId("rosa") as HTMLInputElement;
  const input2 = screen.getByTestId("verde") as HTMLInputElement;
  const input3 = screen.getByTestId("azul") as HTMLInputElement;
  const container = screen.getByTestId("container-rgba");

  expect(input1.value).toEqual("93");
  expect(input2.value).toEqual("121");
  expect(input3.value).toEqual("184");

  expect(
    (container.style.backgroundColor = `rgba(${input1.value},${input2.value},${input3.value})`)
  ).toEqual(`rgba(${input1.value},${input2.value},${input3.value})`);
});

test("FUNÇÕES APP", () => {
  render(<Home />);

  const input1 = screen.getByTestId("rosa") as HTMLInputElement;
  const input2 = screen.getByTestId("verde") as HTMLInputElement;
  const input3 = screen.getByTestId("azul") as HTMLInputElement;
  const container = screen.getByTestId("container-rgba");

  fireEvent.change(input1, {
    target: {
      value: "93",
    },
  });

  fireEvent.change(input2, {
    target: {
      value: "121",
    },
  });

  fireEvent.change(input3, {
    target: {
      value: "184",
    },
  });

  expect(
    (container.style.backgroundColor = `rgba(${input1.value},${input2.value},${input3.value})`)
  ).toEqual(`rgba(${input1.value},${input2.value},${input3.value})`);
});

test("FUNÇÕES TEMA PAGE", async () => {
  render(<Home />);
  expect(
    screen.getByTestId("container-page").classList.contains("home-p")
  ).toEqual(false);
  expect(
    screen.getByTestId("container-page").classList.contains("tema-escuro")
  ).toEqual(true);
});
