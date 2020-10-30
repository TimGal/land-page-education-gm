jQuery(function ($) {
	$("#edu_tel").mask("+9(999) 999-99-99");
});

if ($('input[name="agree"]').is(':checked')) {
	$('button[name="send"]').removeClass("disabled");
} else {
	$('button[name="send"]').addClass("disabled");
}

$('input[name="agree"]').on('click', function () {
	if ($(this).is(':checked')) {
		$('button[name="send"]').removeClass("disabled");
	} else {
		$('button[name="send"]').addClass("disabled");
	}
});

$('button[name="send"]').click(function () {
	if (document.getElementById("workName").value == '' || document.getElementById("researchArea").value == '' || document.getElementById("workInfo").value == '') {
		if (document.getElementById("workName").value == '') {
			Materialize.toast('Введите название конкурсной работы', 2000);
		}
		if (document.getElementById("researchArea").value == '') {
			Materialize.toast('Введите область исследования', 2000);
		}
		if (document.getElementById("workInfo").value == '') {
			Materialize.toast('Введите сведения о месте учебы (работы) соискателя', 2000);
		}
		return false;
	} else {
		return true;
	}
});

