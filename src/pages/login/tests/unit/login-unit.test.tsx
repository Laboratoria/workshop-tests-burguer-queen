import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as router from "react-router";

import { Login } from "../../login";


// 1.2 Mocks
const navigate = jest.fn();
jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

jest.mock("../../../../services/auth-service", () => {
  return {
    createSession: jest.fn(),
    loginService: () =>
      Promise.resolve({
        accessToken: "token",
        user: {
          id: 1,
          role: "admin",
          email: "email@algo.com",
        },
      }),
  };
});

describe("Login", () => {
  it.only("debe llamar la función navigate con el path '/' si los credenciales son correctos", async () => {
    // --------------------------------------------------------
    /* 1. Arrange - Preparar

      Prepare los requisitos previos para nuestra prueba.

      ejemplo:
        - mockear una función/servicio
        - renderizar un componente correctamente
    */
    // --------------------------------------------------------


    // 1.1 renderizar el un router con el componente Login
    // render(<Login />);
    render(
      <router.MemoryRouter>
        <Login />
      </router.MemoryRouter>
    );

    // 1.2 obtener los elementos del DOM con los que vamos a interactuar

    const emailInput = screen.getByTestId("login_form_email_input");
    const passwordInput = screen.getByTestId("login_form_password_input");
    const submitButton = screen.getByTestId("login_form_submit_button");

    // --------------------------------------------------------
    /* 2. Act - Actuar / Interactuar

      Interactúe con el componente que está probando.

      ejemplo:
        - hacer clic en un botón
        - escribir en un campo de texto
    */
    // --------------------------------------------------------

    // 2.1 llenar los campos del formulario
    await userEvent.type(emailInput, "grace.hopper@systers.xyz");
    await userEvent.type(passwordInput, "123456");

    // 2.2 hacer clic en el botón de submit
    await userEvent.click(submitButton);

    // --------------------------------------------------------
    /* 3. Assert - Asegurarse / Afirmar

      Asegurarse que el resultado de la interacción es el esperado.

      ejemplo:
        - verificar que se renderizó un elemento
        - verificar que se mostró un mensaje de error
    */
    // --------------------------------------------------------

    // verificar que se llamo la función navigate con el path "/"
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/");
    });
  });
});
