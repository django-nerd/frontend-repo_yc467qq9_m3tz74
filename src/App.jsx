import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Layout from './components/Layout'
import { AdminSection, DoctorSection, PatientSection } from './components/Sections'
import { useState } from 'react'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route
          index
          element={
            <>
              <Hero />
              <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold text-xl">Admin Module</h3>
                  <p className="text-blue-200/80 mt-2">Create users, doctors, patients, and oversee appointments.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold text-xl">Doctor Module</h3>
                  <p className="text-blue-200/80 mt-2">View schedules, manage consultations and add prescriptions.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold text-xl">Patient Module</h3>
                  <p className="text-blue-200/80 mt-2">Book appointments and access care history.</p>
                </div>
              </div>
            </>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
      </Route>
    </Routes>
  )
}

function AdminPage() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('user')
  return (
    <>
      <Hero />
      <AdminSection onQuickCreate={(t) => { setType(t); setOpen(true) }} />
      <QuickCreateModal open={open} onClose={() => setOpen(false)} type={type} />
    </>
  )
}

function DoctorPage() {
  return (
    <>
      <Hero />
      <DoctorSection />
    </>
  )
}

function PatientPage() {
  return (
    <>
      <Hero />
      <PatientSection />
    </>
  )
}

function QuickCreateModal({ open, onClose, type }) {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    user: { name: '', email: '', role: 'admin' },
    doctor: { user_id: '', specialty: '', experience_years: 0 },
    patient: { user_id: '', age: '', gender: 'other' },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      let endpoint = ''
      let payload = null
      if (type === 'user') { endpoint = '/api/users'; payload = form.user }
      if (type === 'doctor') { endpoint = '/api/doctors'; payload = { ...form.doctor, experience_years: Number(form.doctor.experience_years) } }
      if (type === 'patient') { endpoint = '/api/patients'; payload = { ...form.patient, age: form.patient.age ? Number(form.patient.age) : null } }

      const res = await fetch(baseUrl + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setMessage('Created successfully: ' + (data.id || ''))
    } catch (err) {
      setMessage('Error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  const field = {
    user: (
      <>
        <label className="block text-sm text-blue-100">Name</label>
        <input className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.user.name} onChange={e=>setForm(f=>({...f, user:{...f.user, name:e.target.value}}))} />
        <label className="block text-sm text-blue-100 mt-3">Email</label>
        <input className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.user.email} onChange={e=>setForm(f=>({...f, user:{...f.user, email:e.target.value}}))} />
        <label className="block text-sm text-blue-100 mt-3">Role</label>
        <select className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.user.role} onChange={e=>setForm(f=>({...f, user:{...f.user, role:e.target.value}}))}>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
      </>
    ),
    doctor: (
      <>
        <label className="block text-sm text-blue-100">User ID</label>
        <input className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.doctor.user_id} onChange={e=>setForm(f=>({...f, doctor:{...f.doctor, user_id:e.target.value}}))} />
        <label className="block text-sm text-blue-100 mt-3">Specialty</label>
        <input className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.doctor.specialty} onChange={e=>setForm(f=>({...f, doctor:{...f.doctor, specialty:e.target.value}}))} />
        <label className="block text-sm text-blue-100 mt-3">Experience (years)</label>
        <input type="number" className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.doctor.experience_years} onChange={e=>setForm(f=>({...f, doctor:{...f.doctor, experience_years:e.target.value}}))} />
      </>
    ),
    patient: (
      <>
        <label className="block text-sm text-blue-100">User ID</label>
        <input className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.patient.user_id} onChange={e=>setForm(f=>({...f, patient:{...f.patient, user_id:e.target.value}}))} />
        <label className="block text-sm text-blue-100 mt-3">Age</label>
        <input type="number" className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.patient.age} onChange={e=>setForm(f=>({...f, patient:{...f.patient, age:e.target.value}}))} />
        <label className="block text-sm text-blue-100 mt-3">Gender</label>
        <select className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white" value={form.patient.gender} onChange={e=>setForm(f=>({...f, patient:{...f.patient, gender:e.target.value}}))}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </>
    )
  }[type]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md p-6 rounded-2xl bg-[#0B1020] border border-white/10">
        <h3 className="text-white font-semibold text-lg mb-4 capitalize">Quick create {type}</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          {field}
          <div className="pt-2 flex gap-2">
            <button disabled={loading} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-60">{loading ? 'Saving...' : 'Save'}</button>
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">Cancel</button>
          </div>
        </form>
        {message && <p className="mt-3 text-sm text-blue-200/90">{message}</p>}
      </div>
    </div>
  )
}

export default App
