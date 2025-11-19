import DashCard from './DashCard'

export function AdminSection({ onQuickCreate }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-4">Admin Dashboard</h2>
      <p className="text-blue-200/80 mb-6">Manage users, doctors, patients and appointments.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashCard title="Create User" subtitle="Add admin, doctor or patient" cta="Create" onClick={() => onQuickCreate('user')} />
        <DashCard title="Create Doctor" subtitle="Link to a user" cta="Create" onClick={() => onQuickCreate('doctor')} />
        <DashCard title="Create Patient" subtitle="Link to a user" cta="Create" onClick={() => onQuickCreate('patient')} />
        <DashCard title="View Users" cta="Open" />
        <DashCard title="View Doctors" cta="Open" />
        <DashCard title="View Patients" cta="Open" />
      </div>
    </section>
  )
}

export function DoctorSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-4">Doctor Dashboard</h2>
      <p className="text-blue-200/80 mb-6">Review appointments and add prescriptions.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashCard title="Upcoming Appointments" cta="View" />
        <DashCard title="Create Prescription" cta="New" />
        <DashCard title="Patients" cta="View" />
      </div>
    </section>
  )
}

export function PatientSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-4">Patient Dashboard</h2>
      <p className="text-blue-200/80 mb-6">Book appointments and see prescriptions.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashCard title="Book Appointment" cta="Book" />
        <DashCard title="My Appointments" cta="View" />
        <DashCard title="Prescriptions" cta="View" />
      </div>
    </section>
  )
}
