var nose_x = 0
var nose_y = 0
function preload()
{
    beard = loadImage('https://i.postimg.cc/T3bC8qTB/images-removebg-preview.png')
    mustache = loadImage('https://i.postimg.cc/ncyCWqRs/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA5-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8y-NF9jd-XJse-V9ib-GFja19td-XN0-YWNo-ZV9p.png')
}


function setup()
{
canvas = createCanvas(400, 300)
canvas.center()
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses);
}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results)
    nose_x = results[0].pose.nose.x
    nose_y = results[0].pose.nose.y 
    console.log(nose_x)
    console.log(nose_y)
}
}

function modelLoaded()
{
    console.log("posenet works")
}

function draw()
{
image(video, 0, 0, 400, 300, )
image(mustache, nose_x + 30, nose_y, 30, 30)
image(beard, nose_x + 10, nose_y - 5 + 15, 70, 50)
}

function take_snapshot()
{
    save('myFilterImage.png')
}