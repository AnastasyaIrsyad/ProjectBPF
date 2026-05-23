import PageHeader from "../components/PageHeader";
import customers from "../data/customers.json";

export default function Customers() {
    return (
        <div className="bg-pink-50 min-h-screen">
            <PageHeader title="Customers" breadcrumb="User Database">
                <button className="bg-hijau text-white px-4 py-2 rounded-md font-bold hover:opacity-90 transition shadow-sm">
                    + Add Customer
                </button>
            </PageHeader>

            <div className="p-6">
                <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-pink-100">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-pink-100 text-pink-700">
                                <th className="p-4 text-left border-b border-pink-200">ID</th>
                                <th className="p-4 text-left border-b border-pink-200">Nama Lengkap</th>
                                <th className="p-4 text-left border-b border-pink-200">Email</th>
                                <th className="p-4 text-left border-b border-pink-200">Telepon</th>
                                <th className="p-4 text-center border-b border-pink-200">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((c) => (
                                <tr key={c.customerId} className="border-b border-pink-50 hover:bg-pink-50 transition">
                                    <td className="p-4 font-mono text-sm font-bold text-pink-600">
                                        #{c.customerId}
                                    </td>
                                    <td className="p-4 font-bold text-gray-800">
                                        {c.customerName}
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        {c.email}
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        {c.phone}
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                            {c.loyalty}
                                        </span>
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