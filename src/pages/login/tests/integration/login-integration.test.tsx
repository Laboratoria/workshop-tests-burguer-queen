// import {
//   // render,
//   // screen,
//   // waitFor
// } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";

// import { Login } from "./login";

// import { App } from "../../App";
// import { User } from "../../models";
// import {
//   // loginService,
//   // getSession,
// } from "../../services";

// Reference: https://stackoverflow.com/questions/74497916/referenceerror-request-is-not-defined-when-testing-with-react-router-v6-4
// 1.1 Para poder renderizar el App con el browser router es necesario setear estos globals
// global.fetch = jest.fn();
// global.Request = jest.fn();

// 1.3 Mocks
// jest.mock("../../services/auth-service", () => {
//   return {
//     // createSession: jest.fn(),
//     // getSession: jest.fn(),
//     // getSession: () => ({
//     //   token: null,
//     //   user: null,
//     // }),
//     // loginService: jest.fn(),
//     // loginService: () =>
//     //   Promise.resolve({
//     //     accessToken: "token",
//     //     user: {
//     //       id: 1,
//     //       role: "admin",
//     //       email: "email@algo.com",
//     //     },
//     //   }),
//   };
// });
// const mockedLoginService = loginService as jest.MockedFunction<
//   typeof loginService
// >;
// const mockedGetSession = getSession as jest.MockedFunction<typeof getSession>;

describe("Login", () => {
  it.only("debe redirigir a la página de inicio si los credenciales son correctos", async () => {
    // console.log("window.location.pathname inicial: ", window.location.pathname);

    // --------------------------------------------------------
    /* 1. Arrange - Preparar

      Prepare los requisitos previos para nuestra prueba.

      ejemplo:
        - mockear una función/servicio
        - renderizar un componente correctamente
    */
    // --------------------------------------------------------

    // 1.3 mockear el servicio
    // const userMock: User = {
    //   id: 1,
    //   role: "admin",
    //   email: "test@email.com",
    // };
    // getSession.mockReturnValue({ // error de lint por typescript
    //   token: "token",
    //   user: userMock,
    // })
    // mockedGetSession
    //   .mockReturnValue({ // por defecto
    //     token: "token",
    //     user: userMock,
    //   })
    //   .mockReturnValueOnce({ // la primera vez que se llama
    //     token: null,
    //     user: null,
    //   });
    // .mockReturnValueOnce({ // la segunda vez que se llama
    //   token: "otro token",
    //   user: {
    //     id: 2,
    //     role: "admin",
    //     email: "otrauser@labo.com@",
    //   },
    // });
    // mockedLoginService.mockResolvedValueOnce({
    //   accessToken: "token",
    //   user: userMock,
    // });

    // 1.1 renderizar el un router con el componente Login
    // render(<Login />)
    // render(<App />);
    // console.log(
    //   "window.location.pathname despues del render: ",
    //   window.location.pathname
    // );

    // 1.2 obtener los elementos del DOM con los que vamos a interactuar

    // const emailInput = screen.getByTestId("login_form_email_input");
    // const passwordInput = screen.getByTestId("login_form_password_input");
    // const submitButton = screen.getByTestId("login_form_submit_button");

    // --------------------------------------------------------
    /* 2. Act - Actuar / Interactuar

      Interactúe con el componente que está probando.

      ejemplo:
        - hacer clic en un botón
        - escribir en un campo de texto
    */
    // --------------------------------------------------------

    // 2.1 llenar los campos del formulario
    // console.log("llenando ese form como si no hubiera un mañana")
    // await userEvent.type(emailInput, "grace.hopper@systers.xyz");
    // await userEvent.type(passwordInput, "123456");
    // await userEvent.type(emailInput, userMock.email);
    // await userEvent.type(passwordInput, "noImportaPorqueEstaMockeado");

    // 2.2 hacer clic en el botón de submit
    // await userEvent.click(submitButton);

    // --------------------------------------------------------
    /* 3. Assert - Asegurarse / Afirmar

      Asegurarse que el resultado de la interacción es el esperado.

      ejemplo:
        - verificar que se renderizó un elemento
        - verificar que se mostró un mensaje de error
    */
    // --------------------------------------------------------

    // verificar que se renderizó el componente Home
    // await waitFor(() => {
    //   expect(screen.getByTestId("home_page")).toBeInTheDocument();
    //   expect(window.location.pathname).toBe("/");
    // });

    // console.log("window.location.pathname despues del login: ", window.location.pathname)
    // screen.debug();
  });

  it("debe mostrar un mensaje de error si los credenciales son incorrectos", async () => {
    /* 1. Arrange - Preparar

      Prepare los requisitos previos para nuestra prueba.

      ejemplo:
        - mockear una función/servicio
        - renderizar un componente correctamente
    */
    // mockear el servicio
    // renderizar el componente
    // obtener los elementos del DOM con los que vamos a interactuar
    /* 2. Act - Actuar / Interactuar

      Interactúe con el componente que está probando.

      ejemplo:
        - hacer clic en un botón
        - escribir en un campo de texto
    */
    // llenar los campos del formulario
    // hacer clic en el botón de submit
    /* 3. Assert - Asegurarse / Afirmar

      Asegurarse que el resultado de la interacción es el esperado.

      ejemplo:
        - verificar que se renderizó un elemento
        - verificar que se mostró un mensaje de error
    */
    // verificar que se muestra el mensaje de error
    // screen.debug();
  });
});
