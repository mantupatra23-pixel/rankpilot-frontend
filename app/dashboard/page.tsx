import Sidebar from "@/components/sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold">RankPilot Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-gray-100 rounded-xl">
            <h2 className="text-xl">SEO Score</h2>
            <p className="text-3xl font-bold">78</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h2 className="text-xl">Keywords</h2>
            <p className="text-3xl font-bold">120</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h2 className="text-xl">Backlinks</h2>
            <p className="text-3xl font-bold">56</p>
          </div>
        </div>
      </div>
    </div>
  );
}
