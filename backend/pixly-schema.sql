CREATE TABLE photos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE metadata (
    id SERIAL PRIMARY KEY,
    tags TEXT [] NOT NULL,
    photo_id TEXT REFERENCES photos ON DELETE CASCADE
);