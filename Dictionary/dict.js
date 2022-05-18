$(function() {
    $('#form-submit').click(function(event) {
        event.preventDefault();
        var serializedData = $("form").serialize();

        request = $.ajax({
            url: "http://localhost:8080/search/",
            type: "POST",
            method: "POST",
            dataType: 'json',
            crossDomain: true,
            data: serializedData
        });

        request.done(function(response, textStatus, jqXHR) {
            var el = $('table');
            if (el.length !== 0) {
                el.remove();
            }
            var body = document.getElementById('page-results');
            var tbl = document.createElement('table');
            tbl.style.width = '100%';
            tbl.setAttribute('border', '1');
            var tbdy = document.createElement('tbody');
            const obj = JSON.parse(JSON.stringify(response));

            for (var i = 0; i < obj.length; i++) {
                var tr = document.createElement('tr');
                let row = obj[i];
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(i + "(" + row.wordtype + ") : " + row.definition))
                tr.appendChild(td)
                tbdy.appendChild(tr);
            }
            tbl.appendChild(tbdy);
            body.appendChild(tbl)
        });

        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
        });
    });
})