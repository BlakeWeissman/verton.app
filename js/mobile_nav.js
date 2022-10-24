const menuBreakpoint = 1087;

function closeMenu() {
	$("ul").hide();
	$("#menu-icon").show();
	$("#menu-icon-close").hide();
}

function openMenu() {
	$("ul").show();
	$("#menu-icon").hide();
	$("#menu-icon-close").show();
}

function hideMenu() {
	$("#menu-icon").hide();
	$("#menu-icon-close").hide();
	$("ul").show();
}

function handleMenuLogic() {
	if ($(window).width() <= menuBreakpoint) {
		closeMenu();
		$("#menu-icon").click(openMenu);
		$("#menu-icon-close").click(closeMenu);
	}
	if ($(window).width() >= menuBreakpoint) {
		hideMenu();
	}
}

$(document).ready(function () {
	handleMenuLogic();
	$(window).resize(handleMenuLogic);
});