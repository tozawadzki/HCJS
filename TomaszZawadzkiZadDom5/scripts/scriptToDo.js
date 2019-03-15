// Definicja modułu todoApp. Pusta tablica może mieć zależności innych modułów, ale nie mamy takich więc jest pusta
angular.module('todoApp', [])
// Definujemy kontroler. Pierwszy argument to nazwa kontrolera, drugi to funkcja    
    // Scope to obiekt który będzie dostępny w widoku
    .controller('TodoListController', function ($scope) {

        // Tablica z wpisami
        $scope.list = [
        // Wykonane więc true
            { title: 'Wyglądać zajebiście', done: true },
        // Niewykonane więc false
            { title: 'Zarabiać gruby hajs', done: false },];
        // Zwracanie ilości niewykonanych zadań
        $scope.remaining = function () {
            // Domyślna wartość zera
            var count = 0;
            // Jeśli wykonane, dodajemy 0. Jeśli nie - 1
            angular.forEach($scope.list, function (todo) {
                count += todo.done ? 0 : 1;
            });
            // Zwracamy ilość niewykonanych zadań
            return count;
        };
        // Usuwanie wykonanych zadań
        $scope.archive = function () {
            // Nowa zmienna
            var oldTodos = $scope.list;
            // Zerujemy tablicę
            $scope.list = [];
            // iteracja po liście
            angular.forEach(oldTodos, function (todo) {
                // Niewykonane zadania zostają dodane do tablicy przez funkcję "push()"
                if (!todo.done) $scope.list.push(todo);
            });
        };
        // Dodanie nowego elementu do listy
        $scope.add = function () {
            // Dodane zadanie jest niewykonane
            $scope.list.push({ title: $scope.newTodo, done: false });
            // Tytuł nowego zadania jest ze zmiennej newTodo, którą po dodaniu ustawiamy na pusty string
            $scope.newTodo = '';
        };
    });

