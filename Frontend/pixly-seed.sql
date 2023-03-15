--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 14.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: metadata; Type: TABLE; Schema: public; Owner: petrachoir
--

CREATE TABLE public.metadata (
    id integer NOT NULL,
    tags text[] NOT NULL,
    photo_id text
);


ALTER TABLE public.metadata OWNER TO petrachoir;

--
-- Name: metadata_id_seq; Type: SEQUENCE; Schema: public; Owner: petrachoir
--

CREATE SEQUENCE public.metadata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.metadata_id_seq OWNER TO petrachoir;

--
-- Name: metadata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: petrachoir
--

ALTER SEQUENCE public.metadata_id_seq OWNED BY public.metadata.id;


--
-- Name: photos; Type: TABLE; Schema: public; Owner: petrachoir
--

CREATE TABLE public.photos (
    id text NOT NULL,
    title text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.photos OWNER TO petrachoir;

--
-- Name: metadata id; Type: DEFAULT; Schema: public; Owner: petrachoir
--

ALTER TABLE ONLY public.metadata ALTER COLUMN id SET DEFAULT nextval('public.metadata_id_seq'::regclass);


--
-- Data for Name: metadata; Type: TABLE DATA; Schema: public; Owner: petrachoir
--

INSERT INTO public.metadata (id, tags, photo_id) VALUES (1, '{absolute,unit,racoon,chubby,crawling,animal,gif}', 'ba9ea7c8-f930-4b00-8691-c6949c2763c7');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (2, '{cat,standing,boss,fight,menacing,gif}', 'e2e619f8-c1a1-4abb-811e-9ceea4b13aa3');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (3, '{chihuahua,dog,shampoo,clean,handsome,wet,funny,gif}', '6044311c-6c2d-49cf-9247-296160f544af');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (4, '{chinese,egg,man,xue,hua,piao,xuehuepiaopiao,meme,gif}', '75079fc6-dd80-4079-8e74-2c169e50afff');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (5, '{chinese,suit,wig,bad,funny,meme,gif}', 'fa3e38c7-0982-42c2-871b-11a6751d7c6d');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (6, '{cody,dog,funny,wig,mask,meme,gif}', '8b289182-0670-43d6-ad0b-0bf2e4340b47');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (7, '{damn,gif}', '0b7a2bb9-e38e-4240-8d38-df3aa5bf93fd');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (8, '{dog,cat,puppy,kitten,affection,hug,tolerant,gif}', '780ac4d7-d8e3-4ecd-9613-7a5563c6fee2');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (9, '{dog,happy,chillign,tongue,outside,gif}', '6af83adf-96f2-4bdf-af52-b37de6e881cb');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (10, '{gigachad,giga,chad,win,gif}', '84739242-e239-49fa-b8a1-2417c9d2d42d');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (11, '{god,damn,right,heisenberg,breaking,bad,walter,white,gif}', 'd1ebbc85-27b7-4e1e-9a49-77aca57249c5');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (12, '{hbox,hungry,box,clutch,super,smash,bros,melee}', 'cd03ab56-538e-411b-8f82-fa5102e044f9');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (13, '{hell,nah,nope,baby,gif}', 'f43aced6-720b-461b-b894-7302a9e00827');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (14, '{homer,simpson,simpsons,nope,hide,bush,awkward,bye,goodbye,gif}', '1ce37e46-9513-415e-b556-510fa299e2ce');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (15, '{hoodie,punching,camera,funny,gif}', 'ba33ca81-4a59-4aff-81de-0284d88326ba');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (16, '{hot,damn,brooklyn99,captain,holt,win,police,gif}', '4fa0d6c2-cfba-4e4a-9e62-50823dc4a2b6');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (17, '{hot,damn,brooklyn99,captain,holt,win,police,gif}', 'c37c9143-f7ea-48d9-8bbd-8ad4e8b10f5b');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (18, '{huh,cat,wtf,meme,gif}', '86f9c1bc-f513-4b7c-a750-ec6102297022');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (19, '{john,cena,bing,qi,ling,bing,chilling,ice,cream,funny,meme,gif}', '6ab4c1f6-f54f-440a-90a2-24ad130747fb');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (20, '{john,cena,lao,gan,ma,hen,hao,chi,laoganma,chinese,meme,gif}', '67a524ae-0680-4be1-865b-e83dade67b05');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (21, '{kanye,west,funny,nevermind,meme,gif}', '2a92320b-8a17-46b3-a951-a911a6f7e477');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (22, '{leonardo,dicaprio,omg,yes,point,pointing,exactly,gif}', '4a0167c9-5227-4c82-bc27-1e4d539ad166');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (23, '{let,cook,sora,woody,hold,meme,gif}', '5d8d20eb-0872-43ab-b442-4cfb683c3662');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (24, '{long,beach,griffy,longbeachgriffy,wtf,excuseme,thehell,gif}', '5b621ea2-0e29-4d54-bbc7-43fc4e26b853');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (25, '{nick,young,confused,say,seriously,funny,meme,gif}', '4a916628-f9ce-4979-973c-4cecfc36ffb8');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (26, '{odablock,odacap,oda,zog,funny,gif}', 'a3e5f900-8c35-418c-aa41-4bc9f0153a6b');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (27, '{rdcworld,hood,bender,punch,dodge,gif}', 'aecf08eb-81b6-4556-b373-883f26eac77f');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (28, '{sad,tears,meme,gif}', 'bf700407-be3e-49b5-b92a-e1d0cc3ade88');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (29, '{spiderman,spider,man,point,funny,meme,gif}', '006f858d-5938-4646-9214-e573c696ae12');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (30, '{supa,hot,fire,rap,battle,roast,meme,gif}', '4eb70a09-f782-4c72-9012-6f11021912f1');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (31, '{super,idol,china,meme,funny,gif}', '77d700c4-8929-4cfe-b1f7-461e7b0852b0');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (32, '{sus,suspect,notsureif,hmm,gif}', '57ef39ee-38e3-48d9-80fb-507fe384d407');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (33, '{swiggity,wiggity,cat,shaq,ready,pounce,funny,meme,gif}', '45d61e02-2020-4096-bae3-c47eaac3527d');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (34, '{tantrum,kid,flailing,meme,funny,gif}', '1c6237ac-af06-4ac4-96d1-5207aaa779cf');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (35, '{rock,sus,meme,gif}', 'd5d49100-f30d-41bb-b82e-5961b1a02993');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (36, '{tiktok,tik,tok,car,shearer,carshearer,dance,funny,meme,gif}', 'fb335aed-6322-454d-abe7-da28960972be');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (37, '{toad,twist}', '51ce3e29-0939-48ee-bcc1-187d7a50ec76');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (38, '{wakanda,black,panther,avengers,marvel,chadwick,boseman,gif}', 'e6ba1301-a77a-49c8-ae87-532fa43d0b43');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (40, '{wtf,cat,gif}', 'c60650a0-67e4-4513-9cad-ec9e3406c8f3');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (41, '{wtf,gif}', 'f408cd33-2e58-4b1d-814b-8988016ee92a');
INSERT INTO public.metadata (id, tags, photo_id) VALUES (42, '{yes,cat,head,bob,agree,nodding,nod,gif}', 'd8a0469c-906b-40cc-b151-48a1d5d201a6');


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: petrachoir
--

INSERT INTO public.photos (id, title, created_at) VALUES ('ba9ea7c8-f930-4b00-8691-c6949c2763c7', 'oh lawd he coming!', '2023-03-15 11:03:56.648179');
INSERT INTO public.photos (id, title, created_at) VALUES ('e2e619f8-c1a1-4abb-811e-9ceea4b13aa3', 'he''s just standing there... menacingly', '2023-03-15 11:04:24.92495');
INSERT INTO public.photos (id, title, created_at) VALUES ('6044311c-6c2d-49cf-9247-296160f544af', 'clean boy', '2023-03-15 11:04:40.804901');
INSERT INTO public.photos (id, title, created_at) VALUES ('75079fc6-dd80-4079-8e74-2c169e50afff', 'egg man', '2023-03-15 11:05:12.628514');
INSERT INTO public.photos (id, title, created_at) VALUES ('fa3e38c7-0982-42c2-871b-11a6751d7c6d', 'hair loss aint no thang', '2023-03-15 11:06:11.826292');
INSERT INTO public.photos (id, title, created_at) VALUES ('8b289182-0670-43d6-ad0b-0bf2e4340b47', 'cody dog', '2023-03-15 11:06:20.011339');
INSERT INTO public.photos (id, title, created_at) VALUES ('0b7a2bb9-e38e-4240-8d38-df3aa5bf93fd', 'damnnnnnnnnn', '2023-03-15 11:06:29.72983');
INSERT INTO public.photos (id, title, created_at) VALUES ('780ac4d7-d8e3-4ecd-9613-7a5563c6fee2', 'cat dog love', '2023-03-15 11:06:38.303717');
INSERT INTO public.photos (id, title, created_at) VALUES ('6af83adf-96f2-4bdf-af52-b37de6e881cb', 'sun eater', '2023-03-15 11:06:45.332003');
INSERT INTO public.photos (id, title, created_at) VALUES ('84739242-e239-49fa-b8a1-2417c9d2d42d', 'gigachad', '2023-03-15 11:06:56.908657');
INSERT INTO public.photos (id, title, created_at) VALUES ('d1ebbc85-27b7-4e1e-9a49-77aca57249c5', 'you''re god damn right', '2023-03-15 11:07:05.278164');
INSERT INTO public.photos (id, title, created_at) VALUES ('cd03ab56-538e-411b-8f82-fa5102e044f9', 'clutchbox', '2023-03-15 11:07:13.287769');
INSERT INTO public.photos (id, title, created_at) VALUES ('f43aced6-720b-461b-b894-7302a9e00827', 'oh hell nahhh', '2023-03-15 11:07:23.186026');
INSERT INTO public.photos (id, title, created_at) VALUES ('1ce37e46-9513-415e-b556-510fa299e2ce', 'nope nope nope', '2023-03-15 11:07:31.996684');
INSERT INTO public.photos (id, title, created_at) VALUES ('ba33ca81-4a59-4aff-81de-0284d88326ba', 'camera demolisher', '2023-03-15 11:07:46.755458');
INSERT INTO public.photos (id, title, created_at) VALUES ('4fa0d6c2-cfba-4e4a-9e62-50823dc4a2b6', 'HOT DAMN!!!', '2023-03-15 11:07:58.31448');
INSERT INTO public.photos (id, title, created_at) VALUES ('c37c9143-f7ea-48d9-8bbd-8ad4e8b10f5b', 'what''d you say...?', '2023-03-15 11:08:07.189161');
INSERT INTO public.photos (id, title, created_at) VALUES ('86f9c1bc-f513-4b7c-a750-ec6102297022', 'HUH', '2023-03-15 11:08:18.077255');
INSERT INTO public.photos (id, title, created_at) VALUES ('6ab4c1f6-f54f-440a-90a2-24ad130747fb', 'bing chilling', '2023-03-15 11:08:34.508461');
INSERT INTO public.photos (id, title, created_at) VALUES ('67a524ae-0680-4be1-865b-e83dade67b05', 'lao gan ma', '2023-03-15 11:08:42.551507');
INSERT INTO public.photos (id, title, created_at) VALUES ('2a92320b-8a17-46b3-a951-a911a6f7e477', 'hahaha :(', '2023-03-15 11:08:58.589665');
INSERT INTO public.photos (id, title, created_at) VALUES ('4a0167c9-5227-4c82-bc27-1e4d539ad166', 'omg yes', '2023-03-15 11:09:14.792236');
INSERT INTO public.photos (id, title, created_at) VALUES ('5d8d20eb-0872-43ab-b442-4cfb683c3662', 'let him cook', '2023-03-15 11:09:25.395219');
INSERT INTO public.photos (id, title, created_at) VALUES ('5b621ea2-0e29-4d54-bbc7-43fc4e26b853', 'excuse me?', '2023-03-15 11:09:36.967212');
INSERT INTO public.photos (id, title, created_at) VALUES ('4a916628-f9ce-4979-973c-4cecfc36ffb8', 'say what?', '2023-03-15 11:09:45.118973');
INSERT INTO public.photos (id, title, created_at) VALUES ('a3e5f900-8c35-418c-aa41-4bc9f0153a6b', 'odajam', '2023-03-15 11:09:56.843185');
INSERT INTO public.photos (id, title, created_at) VALUES ('aecf08eb-81b6-4556-b373-883f26eac77f', 'hoodbender', '2023-03-15 11:10:07.348257');
INSERT INTO public.photos (id, title, created_at) VALUES ('bf700407-be3e-49b5-b92a-e1d0cc3ade88', 'for why', '2023-03-15 11:10:16.156609');
INSERT INTO public.photos (id, title, created_at) VALUES ('006f858d-5938-4646-9214-e573c696ae12', 'spiderman point', '2023-03-15 11:10:23.937363');
INSERT INTO public.photos (id, title, created_at) VALUES ('4eb70a09-f782-4c72-9012-6f11021912f1', 'supa hot fire', '2023-03-15 11:10:34.731835');
INSERT INTO public.photos (id, title, created_at) VALUES ('77d700c4-8929-4cfe-b1f7-461e7b0852b0', 'Super Idol 的笑容', '2023-03-15 11:11:09.795988');
INSERT INTO public.photos (id, title, created_at) VALUES ('57ef39ee-38e3-48d9-80fb-507fe384d407', 'sus', '2023-03-15 11:11:24.566343');
INSERT INTO public.photos (id, title, created_at) VALUES ('45d61e02-2020-4096-bae3-c47eaac3527d', 'swiggity swoogity', '2023-03-15 11:11:34.687492');
INSERT INTO public.photos (id, title, created_at) VALUES ('1c6237ac-af06-4ac4-96d1-5207aaa779cf', 'tantrum kid', '2023-03-15 11:11:43.294645');
INSERT INTO public.photos (id, title, created_at) VALUES ('d5d49100-f30d-41bb-b82e-5961b1a02993', 'are you sure about that', '2023-03-15 11:11:51.579349');
INSERT INTO public.photos (id, title, created_at) VALUES ('fb335aed-6322-454d-abe7-da28960972be', 'car shearer dance', '2023-03-15 11:11:59.619955');
INSERT INTO public.photos (id, title, created_at) VALUES ('51ce3e29-0939-48ee-bcc1-187d7a50ec76', 'toad at twist', '2023-03-15 11:12:06.931979');
INSERT INTO public.photos (id, title, created_at) VALUES ('e6ba1301-a77a-49c8-ae87-532fa43d0b43', 'wakanda forever', '2023-03-15 11:12:20.22396');
INSERT INTO public.photos (id, title, created_at) VALUES ('c60650a0-67e4-4513-9cad-ec9e3406c8f3', 'wtf', '2023-03-15 11:13:15.582885');
INSERT INTO public.photos (id, title, created_at) VALUES ('f408cd33-2e58-4b1d-814b-8988016ee92a', 'what in the f-...', '2023-03-15 11:13:26.799762');
INSERT INTO public.photos (id, title, created_at) VALUES ('d8a0469c-906b-40cc-b151-48a1d5d201a6', 'yes i agree', '2023-03-15 11:13:36.045668');


--
-- Name: metadata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: petrachoir
--

SELECT pg_catalog.setval('public.metadata_id_seq', 42, true);


--
-- Name: metadata metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: petrachoir
--

ALTER TABLE ONLY public.metadata
    ADD CONSTRAINT metadata_pkey PRIMARY KEY (id);


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: petrachoir
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: metadata metadata_photo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: petrachoir
--

ALTER TABLE ONLY public.metadata
    ADD CONSTRAINT metadata_photo_id_fkey FOREIGN KEY (photo_id) REFERENCES public.photos(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

