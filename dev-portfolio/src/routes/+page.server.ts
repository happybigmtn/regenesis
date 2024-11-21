export const config = {
  runtime: 'edge'
};

export async function load() {
  return {
    streamed: {
      focusAreas: new Promise(resolve => resolve([])),
      projects: new Promise(resolve => resolve([]))
    }
  };
}
