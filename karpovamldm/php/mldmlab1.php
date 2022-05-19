<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №1</title>
    <script type="text/javascript" src="/scripts/scripts1.js"></script>
</head>
<body>
<h1> Лабораторная работа №1 </h1>

<form>
    <table>
        <tr>
            <td> <h2>Первый массив</h2> </td>
            <td> <input type="text" id="massiv1" value=""/></td>
        </tr>

        <tr>
            <td> <h2>Второй массив</h2> </td>
            <td> <input type="text" id="massiv2" value=""/></td>
        </tr>
        <tr>
            <td> <input  type="button" value="Сделать расчет" onclick="Sets()"> </td>
        </tr>
        <tr><td>
                <h4>Объединение: </h4></td>
                <td><p id="union"></p>
            </td></tr>

        <tr><td>
                <h4>Пересечение: </h4></td>
           <td><p id="intersection"></p>
            </td></tr>

        <tr><td>
                <h4>Дополнение A\B: </h4></td>
                <td><p id="difference_AB"></p>
            </td></tr>

        <tr><td>
                <h4>Дополнение B\A: </h4></td>
                <td><p id="difference_BA"></p>
            </td></tr>

        <tr><td>
                <h4>Симметричная разность: </h4></td>
                <td><p id="symmetrical_difference"></p>
            </td></tr>

    </table>
</form>
</body>
</html>