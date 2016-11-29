'use strict';

/*
  Note: This test uses an HTML Fixture. Fixture elements are essentially an insertion of HTML onto your DOM for your tests to run on if your JS operates on the DOM.
  Using fixtures is a good practice in JS testing, and generally fixtures should be separated out from the code.
*/

describe('Add Tasks', function () {
    var container, application;

    beforeEach(function () {
        container = fixture(
         '<input id="newTask" type="text" placeholder="New Task">'+
         '<button id="addTask">Add Tasks</button>' +
          '<ul id="todoList"></ul>'+  '<button id="delete">Delete</button>'
        );
        document.body.appendChild(container);
        application = new Application(document);
    });

    afterEach(function () {
        document.body.removeChild(container);
    });

    it('should show the list when add button is presses', function () {
         application.init();
        document.getElementById('newTask').value="sample";
        document.getElementById('addTask').click();
        expect(document.getElementById('sample').id).toEqual("sample");
    });

    it('Delete task when delete button is pressed', function () {
         application.init();
        document.getElementById('newTask').value="sample";
        document.getElementById('addTask').click();
        expect(document.getElementById('sample').id).toEqual("sample");
        document.getElementById("sample").checked=true;
        document.getElementById('delete').click();
        expect(document.getElementById('sample').id).toEqual("sample");
    });
});

function fixture(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
}
