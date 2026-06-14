# API Reference

Base URL: `http://localhost:3000`

---

## Profile `/api/profile`

### GET /api/profile
Returns all profile data in one call.
```json
{
  "success": true,
  "data": {
    "personal": {},
    "summary": {},
    "education": [],
    "skills": [],
    "competencies": [],
    "certifications": [],
    "hobbies": []
  }
}
```

### PUT /api/profile/personal
```json
{ "name": "Ankit Agnihotry", "phone": "+91 9670014450", "email": "...", "linkedin": "...", "github": "..." }
```

### PUT /api/profile/summary
```json
{ "content": "Profile summary text..." }
```

### POST /api/profile/education
```json
{ "degree": "BCA", "institution": "BBD University", "year": "2022", "percentage": "79.6%" }
```

### PUT /api/profile/education/:id — DELETE /api/profile/education/:id

### POST /api/profile/skills
```json
{ "name": "Node.js", "category": "framework" }
```
Categories: `language | framework | database | cloud | tool | security | architecture`

### PUT /api/profile/skills/:id — DELETE /api/profile/skills/:id

### POST /api/profile/competencies
```json
{ "title": "Scalable Backend Development" }
```

### DELETE /api/profile/competencies/:id

### POST /api/profile/certifications
```json
{ "title": "AWS Certified", "issuer": "Amazon" }
```

### DELETE /api/profile/certifications/:id

### POST /api/profile/hobbies
```json
{ "name": "Gaming", "emoji": "🎮" }
```

### DELETE /api/profile/hobbies/:id

---

## Experience `/api/experience`

### GET /api/experience
### POST /api/experience
```json
{
  "company": "Company Name",
  "role": "Software Developer",
  "start_date": "Jan 2022",
  "end_date": null,
  "is_current": true,
  "points": ["Did this", "Built that"],
  "company_logo": "/images/companies/logo.png"
}
```
### PUT /api/experience/:id
### DELETE /api/experience/:id

---

## Projects `/api/projects`

### GET /api/projects
### POST /api/projects
```json
{
  "title": "My Project",
  "description": "What it does",
  "tech_stack": ["Node.js", "PostgreSQL"],
  "github_url": "https://github.com/...",
  "live_url": "https://...",
  "is_featured": true
}
```
### PUT /api/projects/:id
### DELETE /api/projects/:id

### GET /api/projects/achievements
### POST /api/projects/achievements
```json
{ "title": "Award Name", "description": "Details..." }
```
### DELETE /api/projects/achievements/:id
