import FilesInfo from '../../Components/FilesInfo';
import { useDashboardContext } from '../../utilities/DashboardContext';

const Dashboard = () => {
  const { uploadCount } = useDashboardContext();
  return <FilesInfo key={uploadCount} />;
};

export default Dashboard;
