import React from "react";

function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <div className="text-center mb-12">
        <h4 className="text-[#FAB5B5] text-sm font-semibold mb-2">GET IN TOUCH</h4>
        <h2 className="text-3xl font-bold text-[#333] mb-4">Contact Us</h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          If you need consultation with us, you can write a message or call us, we will respond as quickly as possible
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-[#666]">lorenna@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-[#666]">+62 8221 1222 0001</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Working Hours</h3>
            <p className="text-[#666]">Everyday : 08.00-21.00</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-[#666]">
              JI. Raya Cihaluan No.112<br />
              Tangerang Selatan, Indonesia 41222
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Nearby Locations</h3>
          <ul className="space-y-2 text-[#666]">
            <li>• Passar Cicuruq</li>
            <li>• Savanna Green</li>
            <li>• RM Lembur Kurinq</li>
            <li>• Al Kausar Islamic Boarding...</li>
            <li>• PT.Minju Garmenti Sukses</li>
          </ul>
          <div className="mt-8">
            <h3 className="font-bold text-lg mb-2">Office Center Map</h3>
            {/* Placeholder for map component */}
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              [Map Component Would Go Here]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;