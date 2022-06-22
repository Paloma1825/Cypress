Feature: Demo 3 varios escenarios

    Varios escenarios

    Scenario: Escenario1

        Given Abrir el navegador
        When Rellenar el nombre paloma
        When Rellenar el mail paloma@email.com
        And Rellenar la direccion direccion1
        Then Validar la pagina

    Scenario: Escenario2

        Given Abrir el navegador
        When Rellenar el nombre carlos
        When Rellenar el mail carlos@email.com
        And Rellenar la direccion direccionCarlos
        Then Validar la pagina
    
     Scenario: Escenario3

        Given Abrir el navegador
        When Rellenar el nombre Josefa
        When Rellenar el mail Josefa@email.com
        And Rellenar la direccion direccion1_josefa
        Then Validar la pagina