$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      // console.log(data);

      document.querySelector("#profilePic").src = data.results[0].picture.large;
      document.querySelector("#name").innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
      document.querySelector("#title").innerHTML = data.results[0].name.title;
      document.querySelector("#age").innerHTML = data.results[0].dob.age;
      document.querySelector("#userName").innerHTML = data.results[0].login.username;
    }
  });