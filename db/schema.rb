# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_08_25_142000) do
  create_schema "auth"
  create_schema "extensions"
  create_schema "graphql"
  create_schema "graphql_public"
  create_schema "pgbouncer"
  create_schema "pgsodium"
  create_schema "pgsodium_masks"
  create_schema "realtime"
  create_schema "storage"
  create_schema "vault"

  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_graphql"
  enable_extension "pg_stat_statements"
  enable_extension "pgcrypto"
  enable_extension "pgjwt"
  enable_extension "pgsodium"
  enable_extension "plpgsql"
  enable_extension "supabase_vault"
  enable_extension "uuid-ossp"

  create_table "job_descriptions", force: :cascade do |t|
    t.text "description"
    t.integer "job_id"
    t.integer "job_skill_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "job_listings", force: :cascade do |t|
    t.string "job_title"
    t.string "job_link"
    t.integer "job_description_id"
    t.integer "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "company_name"
    t.text "source"
    t.text "scraped_from"
  end

  create_table "job_skills", force: :cascade do |t|
    t.text "skills", default: [], array: true
    t.integer "job_description_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.text "job_title"
    t.text "job_url"
    t.integer "job_description_id"
    t.integer "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scraped_li_job_listings", id: false, force: :cascade do |t|
    t.text "company_name"
    t.text "job_title"
    t.text "job_link"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.text "source"
    t.text "scraped_from"
  end

  create_table "temp", id: false, force: :cascade do |t|
    t.text "c1"
    t.text "c2"
    t.text "c3"
    t.text "c4"
  end
end
