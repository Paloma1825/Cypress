Feature: Demo variables

    Demo variables

    Scenario Outline: Scenario Outline name
        Given Abrir el navegador
        When Rellenar el nombre <username>
        When Rellenar el mail <email>
        And Rellenar la direccion <dir1>
        Then Validar la pagina

        Examples:
            | username | email | dir |
            | paloma | paloma@email.com | direccion1 |
            | jacinto | jacinto@email.com | direccion2 |
            | pedro | pedro@email.com | direccion3 |
            



