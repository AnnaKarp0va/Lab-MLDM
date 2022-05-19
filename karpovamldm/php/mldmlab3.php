<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №3</title>
    <script src="scripts/scripts3.js"></script>
</head>
<body>
<h1>Лабораторная работа №3</h1>
<div class="if">
    <div>
        <label for="rf">Ввод элементов A: </label><input id="rf" type="text">
    </div>
    <div>
        <label for="sf">Ввод элементов B: </label><input id="sf" type="text">
    </div>
    <div id="rel">
        <label for="tf">Ввод элементов отношения: </label><input id="tf" type="text">
    </div>
</div>
<div class="cv">
    <button id="commit" onclick="analyze();">Анализ</button>
</div>
<div class="rv">
    <p id="resultMatrix"></p>
    <p id="result"></p>
</div>
</body>
</html>
