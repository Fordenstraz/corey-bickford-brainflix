//Assets/Styles
import './Home.scss';
//Components
import RenderVideoPage from '../../components/RenderVideoPage/RenderVideoPage';

export default function Home({
	user,
	selectedVideo,
	asideVideos,
	selectNewVideo,
}) {
	return (
		<>
			<RenderVideoPage
				user={user}
				selectedVideo={selectedVideo}
				asideVideos={asideVideos}
				selectNewVideo={selectNewVideo}
			/>
		</>
	);
}
