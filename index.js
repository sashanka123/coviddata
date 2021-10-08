$.ajax({
    type:'GET',
    url:'https://api.covid19api.com/summary',
    success:function(response)
    {
        console.log(response.Countries)
        console.log(response.Countries)
        for(i=0;i<response.Countries.length;i++)
        {
            var totalactive=response.Countries[i].TotalConfirmed-response.Countries[i].TotalRecovered
            var tablerow=`<tr><td>${response.Countries[i].Country}</td>
            <td>${response.Countries[i].TotalConfirmed}</td>
            <td>${totalactive}</td>
            <td>${response.Countries[i].TotalRecovered}</td>
            <td>${response.Countries[i].TotalDeaths}</td>
            </tr>`
            $('#tab').append(tablerow)      
        }
    },
    error:function(err)
    {
        console.log(err);
    }
})