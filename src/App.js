import {useEffect} from "react"
import useDrivePicker from "react-google-drive-picker"

function App() {
  const [openPicker, data, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId:"1049157451039-mlumkpl8ab4qug5qfvq26iulvgblmkcg.apps.googleusercontent.com",
      developerKey: "AIzaSyCbxS_HBadMjJa_ktC4Ax8Q59bmkKL8Aqc",
      viewId: "DOCS",
      token:"ya29.a0AWY7Ckn7j-1bLIVRSvFL36AOFqOr2Kom2gS76loDGZbBY6JYwOBZCzMFIkkEA9FeZsQBVX2PiR6Q9pd6tDkp2JI2BmWGKAl-5n6_kBe25rif4kttBdYiEEglcQzQjTmhccN0tJonGoQVRd4WAazGhJcSmdHYaCgYKAYkSARMSFQG1tDrp3x40oQjioMax1KRcig2AGw0163",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true
    })
  }

  useEffect(() =>{
    if(data)
    {
      data.docs.map((i) => console.log(i))
    }
  }, [data])

return (
    <div>
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );

}

export default App;