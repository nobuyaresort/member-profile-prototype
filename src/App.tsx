import React from 'react';
import { Layout } from './components/Layout';
import { ProfileHeader } from './components/ProfileHeader';
import { SkillMap } from './components/SkillMap';
import { AbilityChart } from './components/AbilityChart';
import { ProjectHistory } from './components/ProjectHistory';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <Layout>
      <ProfileHeader />
      <AbilityChart />
      <SkillMap />
      <ProjectHistory />
      <ContactSection />
    </Layout>
  );
}

export default App;