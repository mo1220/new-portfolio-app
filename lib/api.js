const DEFAULT_API_BASE = 'http://localhost:4000';

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_BASE;
}

async function request(path, options = {}) {
  const url = `${getApiBaseUrl()}${path}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch (_error) {
    payload = null;
  }

  if (!response.ok || !payload?.success) {
    const message =
      payload?.error?.message || `API request failed: ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.code = payload?.error?.code;
    error.details = payload?.error?.details;
    throw error;
  }

  return payload;
}

export async function fetchHealth() {
  const result = await request('/api/health');
  return result.data;
}

export async function fetchProfile() {
  const result = await request('/api/profile');
  return result.data;
}

export async function fetchSkills(category) {
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  const result = await request(`/api/skills${query}`);
  return result.data;
}

export async function fetchPortfolio(group) {
  const query = group ? `?group=${encodeURIComponent(group)}` : '';
  const result = await request(`/api/portfolio${query}`);
  return result.data;
}

export async function fetchPortfolioBySlug(slug) {
  const result = await request(`/api/portfolio/${encodeURIComponent(slug)}`);
  return result.data;
}

export async function createContactMessage(body) {
  const result = await request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return result.data;
}

export { getApiBaseUrl };
