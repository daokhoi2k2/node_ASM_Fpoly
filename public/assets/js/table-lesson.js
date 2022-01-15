const videoFixedElement = $(".video_fixed")[0];
const videoElement = $("#video")[0];
const playElement = $(".play-btn")[0];
const selectMapElement = $("#selectMap")[0];

const removeLessonElement = $(".removeLesson");

const showBoxVideo = (id, videoUrl) => {
	videoFixedElement.style.display = "block";
	videoElement.src = `/assets/video/${videoUrl}`;

	if ($(playElement).hasClass("playing")) {
		$(playElement).removeClass("playing");
		$(playElement).addClass("paused");
	}
};

const removeLesson = (id, e) => {
	fetch(`/api/lessons/${id}`, { method: "DELETE" })
		.then((res) => {
			if (res.status === 200) {
				$(e).parent().parent().remove();
				Toastify({
					text: "Xóa thành công",
					className: "success",
					style: {
						background: "linear-gradient(to right, #00b09b, #96c93d)",
					},
					gravity: "bottom",
				}).showToast();
			}
		})
		.catch((err) => {
			Toastify({
				text: "Có lỗi xảy ra",
				className: "danger",
				style: {
					background: "linear-gradient(to right, #00b09b, #96c93d)",
				},
				gravity: "bottom",
			}).showToast();
		});
};

const handleCloseVideo = () => {
	videoFixedElement.style.display = "none";
	videoElement.src = "";
};
