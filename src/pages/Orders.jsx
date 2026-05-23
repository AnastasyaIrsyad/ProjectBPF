import PageHeader from "../components/PageHeader";
import orders from "../data/orders.json";

export default function Orders() {
    return (
        <div className="bg-pink-50 min-h-screen">
            <PageHeader title="Orders" breadcrumb="Order List">
                <button className="bg-hijau text-white px-4 py-2 rounded-md font-bold hover:opacity-90 transition shadow-sm">
                    + Add New Order
                </button>
            </PageHeader>

            <div className="p-6">
                <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-pink-100">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-pink-100 text-pink-700">
                                {/* Nama kolom disesuaikan urutannya */}
                                <th className="p-4 text-left border-b border-pink-200">Order ID</th>
                                <th className="p-4 text-left border-b border-pink-200">Customer</th>
                                <th className="p-4 text-center border-b border-pink-200">Status</th>
                                <th className="p-4 text-left border-b border-pink-200">Total Harga</th>
                                <th className="p-4 text-left border-b border-pink-200">Tanggal</th>
                            </tr>
                        </thead>
                        {/* Menggunakan tbody agar kolom sejajar dengan thead */}
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.orderId} className="border-b border-pink-50 hover:bg-pink-50 transition">
                                    <td className="p-4 text-sm font-bold text-pink-600">
                                        #{order.orderId}
                                    </td>
                                    <td className="p-4 text-gray-800 font-medium">
                                        {order.customerName}
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 rounded text-[10px] font-black uppercase border ${
                                            order.status === "Completed" ? "bg-green-100 border-green-200 text-green-700" :
                                            order.status === "Pending" ? "bg-yellow-100 border-yellow-200 text-yellow-700" :
                                            "bg-red-100 border-red-200 text-red-700"
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-700 font-bold">
                                        Rp {order.totalPrice.toLocaleString()}
                                    </td>
                                    <td className="p-4 text-gray-500 text-sm">
                                        {order.orderDate}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}