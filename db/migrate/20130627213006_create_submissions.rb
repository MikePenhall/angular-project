class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.string :name
      t.string :job_number
      t.text :description
      t.integer :age
      t.text :address
      t.string :occupation

      t.timestamps
    end
  end
end
