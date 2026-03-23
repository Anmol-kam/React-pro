import React from 'react'

function SkillBar({ name, percent }) {
  return (
    <div className="mb-4">
      <p className="text-sm mb-1">{name}</p>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-10 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT - SKILLS */}
        <div>
          <h2 className="text-xl font-bold mb-6">Software Skills</h2>

          <SkillBar name="Photoshop" percent={90} />
          <SkillBar name="Illustrator" percent={85} />
          <SkillBar name="InDesign" percent={80} />
          <SkillBar name="Premiere" percent={70} />
          <SkillBar name="After Effects" percent={75} />

          <h2 className="text-xl font-bold mt-10 mb-4">Languages</h2>

          <SkillBar name="English" percent={95} />
          <SkillBar name="Arabic" percent={70} />
          <SkillBar name="Turkish" percent={60} />
        </div>

        {/* CENTER - EXPERIENCE */}
        <div>
          <h2 className="text-xl font-bold mb-6">Experience</h2>

          <div className="mb-6">
            <p className="font-semibold">Art Director</p>
            <p className="text-gray-400 text-sm">
              White Fish Advertising Co.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Senior Graphic Designer</p>
            <p className="text-gray-400 text-sm">
              Pyramids Sun Advertising Co.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Graphic Designer</p>
            <p className="text-gray-400 text-sm">
              Planet Stationary & Printing
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Graphic Designer</p>
            <p className="text-gray-400 text-sm">
              Marco Florida Internet
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Education</h2>

          <p className="text-gray-400">
            BS/MS in Computer Science <br />
            University of Maryland
          </p>
        </div>

        {/* RIGHT - EXTRA */}
        <div>
          <h2 className="text-xl font-bold mb-6">What Can I Do?</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Logo Design</li>
            <li>Branding</li>
            <li>Packaging</li>
            <li>Advertising</li>
            <li>Strategy</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Design Skills</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Creativity</li>
            <li>Planning</li>
            <li>Layout</li>
            <li>Color Sense</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Hobbies</h2>

          <p className="text-gray-400">
            Reading • Drawing • Travel • Photography
          </p>
        </div>

      </div>
    </section>
  );
}